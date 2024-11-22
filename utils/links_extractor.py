import re


def extract_usernames(links):
    usernames = {
        "leetcode": None,
        "github": None,
        "google_scholar": None,
        "linkedin": None
    }

    for link in links:
        if "leetcode.com" in link:
            match = re.search(r"leetcode\.com/([\w-]+)/?", link)
            if match:
                usernames["leetcode"] = match.group(1)
        elif "github.com" in link:
            # Exclude repository links by ensuring there's no extra path after the username
            match = re.search(r"github\.com/([\w-]+)/?$", link)
            if match:
                usernames["github"] = match.group(1)
        elif "scholar.google.com" in link:
            match = re.search(r"user=([\w-]+)", link)
            if match:
                usernames["google_scholar"] = match.group(1)
        elif "linkedin.com/in" in link:
            match = re.search(r"linkedin\.com/in/([\w-]+)/?", link)
            if match:
                usernames["linkedin"] = match.group(1)

    return usernames


# Example usage
# links = [
#     'mailto:omgujarathi08@gmail.com',
#     'tel:9423566730',
#     'https://leetcode.com/OmGujarathi/',
#     'https://www.linkedin.com/in/omgujarathi/',
#     'https://github.com/Om-Gujarathi',
#     'https://scholar.google.com/citations?user=xYE0PuUAAAAJ',
#     'https://www.makeshorts.ai/',
#     'https://iplreels.com/',
#     'https://github.com/Om-Gujarathi/SIH_2023',
#     'http://www.ijnrd.org/papers/IJNRD2212108.pdf'
# ]
#
# usernames = extract_usernames(links)
# print(usernames)
