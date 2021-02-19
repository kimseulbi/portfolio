module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            // style-loader는 css-loader에서 바꾼 js string을 <style> 노드로 생성해줍니다.
            { loader: "style-loader" },
            // css-loader는 css 파일을 js파일에서 쓸 수 있는 string 형태로 변환해줍니다.
            { loader: "css-loader" },
            // postcss-loader는 변환된 css 파일에 postcss.config.js에 추가해둔
            // plugins(예. autoprefixer)이 동작하게 해줍니다.
            // 설정파일의 경로를 따로 지정하고 싶을 때는 config 옵션을 이용해줍니다.
            { loader: "postcss-loader",
              options: {
                config: { path: path.resolve(__dirname, "./") },
                sourceMap: true,
              },
            },
            // sass-loader는 scss파일을 css 파일로 컴파일 시켜줍니다.
            {
              loader: "sass-loader",
              options: {
                importLoaders: 1,
                sourceMap: true, // 이게 true여야 에러 디버깅이 쉬워요.
              },
            },
        ],
      }
    ]
  }
}