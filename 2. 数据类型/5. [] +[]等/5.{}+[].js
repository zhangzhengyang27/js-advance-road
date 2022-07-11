// []  ''
// {}  '[object object]'

// {} + [];
// {}.toString() + [].toString()
// '[object object]' + ''
// '[object object]'


{} + [];
// 第一个{}被默认成为了一个语句，结果就是 +[]=0
