/**
 * Created by mac on 17/8/3.
 */
module.exports = {
    entry: './main.js',
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            }
        ]
    }
}

