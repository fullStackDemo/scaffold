
directory="cdn"
project="demo"

echo "$project 进行压缩成tar"

CURRENTDATE=`date +"%Y-%m-%d&%H_%M_%S"`
echo $CURRENTDATE

# 删除 tar.gz
if [ -f $directory.tar.gz ];then
    rm -rf $directory.tar.gz
fi

cd cdn

# if [ -d $directory ];then
#     echo "cdn 存在";
#     rm -rf $directory
#     yarn build
#     cd $directory
#     rm -rf $directory.tar.gz
#     tar -zcf ../$directory.tar.gz *
# else
#     echo "cdn 不存在";
#     # 重新打包
#     yarn build
#     cd $directory
# fi

tar -zcf ../$directory.tar.gz *

# tar 整个项目
cd ../
# tar -zcf ./$project.tar.gz --exclude=node_modules --exclude=tar *

cp ./$directory.tar.gz ./tar/$directory$CURRENTDATE.tar.gz

