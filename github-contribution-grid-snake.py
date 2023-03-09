import datetime
import numpy as np
from PIL import Image

def generate_image(width, height, date):
    pixels = np.zeros((height, width), dtype=np.uint8)
    for i in range(width):
        for j in range(height):
            day = datetime.date.today() - datetime.timedelta(days=(i * height + j))
            if day.strftime('%Y-%m-%d') == date:
                pixels[j][i] = 255
    img = Image.fromarray(pixels)
    img = img.resize((width * 10, height * 10), resample=Image.NEAREST)
    img.save('snake.gif', optimize=True, quality=95)

generate_image(52, 7, '2022-03-09')

