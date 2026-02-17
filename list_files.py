
import os

start_dir = "design_assets"
output_file = "file_list.txt"

with open(output_file, "w", encoding="utf-8") as f:
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            full_path = os.path.join(root, file)
            f.write(full_path + "\n")
            
print(f"File list written to {output_file}")
