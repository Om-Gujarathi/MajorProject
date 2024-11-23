import json


def extract_json_from_backticks(input_file, output_file):
    try:
        # Read the input file
        with open(input_file, 'r') as file:
            content = file.read()

        # Try loading the content as JSON directly
        try:
            data = json.loads(content)
            print(f"File is already in valid JSON format. Saving as-is to {output_file}.")
        except json.JSONDecodeError:
            # If not valid JSON, check for backticks and extract content
            start = content.find("```") + 3
            end = content.rfind("```")
            if start == -1 or end == -1 or start >= end:
                raise ValueError("No valid JSON found or file is not in proper format.")

            # Extract and validate the JSON data
            json_data = content[start:end].strip()
            data = json.loads(json_data)
            print(f"Extracted valid JSON from backticks. Saving to {output_file}.")

        # Save the validated JSON to the output file
        with open(output_file, 'w') as file:
            json.dump(data, file, indent=4)

    except (json.JSONDecodeError, ValueError) as e:
        print(f"Error: {e}")


# Example usage
# input_file = "../Jobs/final.json"  # File containing the JSON-like text
# output_file = "../Jobs/final.json"  # File to save the formatted JSON
#
# extract_json_from_backticks(input_file, output_file)
