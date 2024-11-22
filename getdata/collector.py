from getdata.github import retrieve_contribution_data
from getdata.leetcode import retrieve_leetcode_data
from getdata.linkedin import fetch_linkedin_account
from getdata.scholar import fetch_and_display_publications


# Function to manage data collection
def collect_user_data(usernames):
    data_collectors = {
        "leetcode": retrieve_leetcode_data,
        "github": retrieve_contribution_data,
        "google_scholar": fetch_and_display_publications,
        "linkedin": fetch_linkedin_account
    }

    collected_data = {}
    for platform, username in usernames.items():
        if username:
            print(f"Fetching data for {platform}: {username}...")
            collected_data[platform] = data_collectors[platform](username)
        else:
            print(f"No username provided for {platform}. Skipping...")

    return collected_data


# Example input and execution
# usernames = {
#     "leetcode": "OmGujarathi",
#     "github": "Om-Gujarathi",
#     "google_scholar": "xYE0PuUAAAAJ",
#     "linkedin": "omgujarathi"
# }
#
# result = collect_user_data(usernames)
# print(result)
