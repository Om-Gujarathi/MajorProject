import os
import json

def combine_json_files(folder_path):
    """
    Combines all JSON files in a given folder into a single array.

    Parameters:
        folder_path (str): The path to the folder containing the JSON files.

    Returns:
        list: An array containing the JSON objects from all files.
    """
    combined_data = []
    try:
        # Iterate through all files in the folder
        for file_name in os.listdir(folder_path):
            if file_name.endswith('.json'):
                file_path = os.path.join(folder_path, file_name)
                # Open and load the JSON file
                with open(file_path, 'r') as json_file:
                    try:
                        data = json.load(json_file)
                        combined_data.append(data)
                    except json.JSONDecodeError as e:
                        print(f"Error decoding JSON from file {file_name}: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

    return combined_data

# print(combine_json_files("../Jobs/"))
