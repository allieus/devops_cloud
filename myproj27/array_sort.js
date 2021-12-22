const { melon_data: song_array } = require("./melon_data");

// 파이썬 스타일로 sort 쓰기
// 이를 위해 Array에 sort2 함수를 추가해보겠습니다.

// this 바인딩이 필요하기에, 절대 arrow function을 쓰면 안 됩니다.
Array.prototype.sort2 = function (key_fn, reverse = false) {
    return this.sort((obj1, obj2) => {
        const key1 = key_fn(obj1);
        const key2 = key_fn(obj2);
        if (key1 < key2) {
            return !reverse ? -1 : 1;
        }
        else if (key1 > key2) {
            return !reverse ? 1 : -1;
        }
        else {
            return 0;
        }
    })
};

const new_song_array = song_array.sort2(
    song => song.title,
    reverse = false,
);

for (const { title } of new_song_array) {
    console.log(title);
}
