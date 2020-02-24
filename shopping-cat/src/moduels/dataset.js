// dummy 데이터 대신 직접 데이터 생성
// 나이: 1~10 랜덤, 이미지: assets/cat.xx.jpg를 id값에 따라 지정, 이름: 미리 선언

const dataSet = () => {
    const productName = [
        "ali", "monsi", "hiro", "lisa", "hosin", "papa", "foi", "naomi", "onlize", "chris", "koa", "rust", "react", 
        "vue", "okan", "mila", "allen", "hozi", "cozyco", "lin", "ryn", "kaya", "solini", "ozon", "ryze", "hite",
        "ruby", "go", "cpp", "csharp", "client", "spring", "django", "selenium", "opencv", "oran", "kay", "kei", "jump", "list"
      ];
    
    const sampleArray = [];
    
    for(let i=0; i<40; i++) {
        let age = Math.floor(Math.random() * 10) + 1;
        sampleArray.push(
            {
            id: i+1,
            name: productName[i],
            age: age,
            isSelected: false,
            amount: 0
            }
        );
    };

    return sampleArray;
}



export default dataSet;