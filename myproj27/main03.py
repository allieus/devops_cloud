import json

# 한글 윈도우는 기본 인코딩이 cp949이기에
# open을 통한 text 파일 열기에서는 필히 encoding을 지정해주어야 합니다.
with open("melon_data.json", "rt", encoding="utf-8") as f:
    song_list = json.loads(f.read())

song_list.sort(key=lambda song: song['like'], reverse=True)

for (index, song) in enumerate(song_list[:10], 1):
    print("{index} [{like}] {title} by {artist}".format(index=index, **song))
