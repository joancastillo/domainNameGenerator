

    var pronoun = ['the','our'];
    var adj = ['great', 'big' ];
    var noun = ['jogger','racoon'];

const randomDomain = () => {
    for (const i of pronoun){
        for (const j of adj){
            for (const k of noun){
                document.write(i + j + k + ".com")
                }
        }
    }
}
randomDomain()
