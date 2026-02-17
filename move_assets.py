
import os
import shutil

source_dir = "design_assets"
target_dir = "."

if not os.path.exists(source_dir):
    print(f"Source directory '{source_dir}' does not exist.")
    exit(1)

print(f"Moving files from '{source_dir}' to '{target_dir}'...")

for item in os.listdir(source_dir):
    source_path = os.path.join(source_dir, item)
    target_path = os.path.join(target_dir, item)
    
    if os.path.exists(target_path):
        print(f"Warning: '{target_path}' already exists. Skipping/Overwriting based on type...")
        if os.path.isdir(target_path) and os.path.isdir(source_path):
             # Merge directories? For now, let's just use shutil.move which might fail or nest if dest exists
             # Better to be explicit.
             print(f"Target directory {item} exists. Merging contents...")
             shutil.copytree(source_path, target_path, dirs_exist_ok=True)
             shutil.rmtree(source_path)
             continue
        else:
            os.remove(target_path) # Overwrite files

    shutil.move(source_path, target_path)
    print(f"Moved: {item}")

# Cleanup source dir if empty
try:
    os.rmdir(source_dir)
    print(f"Removed empty directory: {source_dir}")
except OSError:
    print(f"Directory {source_dir} not empty, manual check required.")

# Cleanup zip file
zip_file = "Personal Portfolio Website Design.zip"
if os.path.exists(zip_file):
    os.remove(zip_file)
    print(f"Removed zip file: {zip_file}")
