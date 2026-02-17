
import zipfile
import os

print(f"Current Working Directory: {os.getcwd()}")
print("Listing files in directory:")
files_in_dir = os.listdir('.')
for f in files_in_dir:
    print(f" - '{f}'")

zip_files = [f for f in files_in_dir if f.endswith('.zip')]

if not zip_files:
    print("No zip files found.")
    exit(1)

for zip_file in zip_files:
    extract_to = "design_assets"
    print(f"Attempting to unzip: '{zip_file}' into '{extract_to}'")
    
    if not os.path.exists(extract_to):
        os.makedirs(extract_to)

    try:
        with zipfile.ZipFile(zip_file, 'r') as zip_ref:
            zip_ref.extractall(extract_to)
        print(f"Successfully extracted {zip_file}")
        
        # recursive list
        for root, dirs, files in os.walk(extract_to):
            for file in files:
                print(f"Extracted: {os.path.join(root, file)}")
                
    except Exception as e:
        print(f"Failed to extract {zip_file}: {e}")
