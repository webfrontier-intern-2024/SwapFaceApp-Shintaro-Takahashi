import json
import os
from PIL import Image, ImageDraw

# JSONデータ（顔の座標情報）
json_data = """
{
  "result": [{
    "box": {
      "probability": 0.9928866028785706,
      "x_max": 652,
      "y_max": 1537,
      "x_min": 198,
      "y_min": 937
    }
  }]
}
"""

# JSONをパースして座標を取得
data = json.loads(json_data)
box = data["result"][0]["box"]
x_min, y_min = box["x_min"], box["y_min"]
x_max, y_max = box["x_max"], box["y_max"]

# ディレクトリのパスを設定
old_img_dir = os.path.join(os.path.dirname(__file__), 'old_img')
new_img_dir = os.path.join(os.path.dirname(__file__), 'new_img')
image_path = os.path.join(old_img_dir, 'face.png')
output_path = os.path.join(new_img_dir, 'masked_face.png')

# 画像を読み込む
image = Image.open(image_path)

# マスキング（黒塗り）を適用
draw = ImageDraw.Draw(image)
draw.rectangle([x_min, y_min, x_max, y_max], fill="black")

# 出力ディレクトリが存在しない場合は作成
os.makedirs(new_img_dir, exist_ok=True)

# マスクされた画像を保存
image.save(output_path)

print(f"マスキングされた画像が '{output_path}' に保存されました。")
