const { melon_data: song_array } = require("./melon_data");


Array.prototype.max = function (key_fn) {
    return this.reduce((acc, song) => {
        return key_fn(acc) < key_fn(song) ? song : acc;
    });
};

Array.prototype.min = function (key_fn) {
    return this.reduce((acc, song) => {
        return key_fn(acc) > key_fn(song) ? song : acc;
    });
};

const top_song = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .min(({ rank }) => rank);

console.log(top_song);

    // .reduce((acc, song) => {
    //     return acc.like < song.like ? song : acc;
    // });


// TODO: #13 방탄소년단의 곡 중에 좋아요 수가 가장 큰 곡명은?
// Array의 filter와 reduce를 활용해주세요.

// const top_song = song_array
//     .filter(({ artist }) => artist === "방탄소년단")
//     .reduce((acc, song) => {
//         return acc.like < song.like ? song : acc;
//     });

// console.log(top_song);

// acc : null     곡1.like=100   => 곡1
// acc : 곡1(100)  곡2(200)      => 곡2














// const top_like_song = song_array
//     .filter(({ artist }) => artist === "방탄소년단")
//     .reduce((acc, song) => {
//         if (!acc || acc.like < song.like)
//             return song;
//         return acc;
//     }, null);


// console.log(top_like_song);
