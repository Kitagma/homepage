const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
const links = document.getElementById("disabled");

/*
button.addEventListener("click", async function(){
    //Data Exchange
    const res = await fetch("http://45.32.251.131/json.php");
    const users = await res.json();

    //Dom Operation
    users.forEach(function(user){
        const list = document.createElement("li");
        const username = user.name;
        list.insertAdjacentHTML('afterbegin','<a href="#">'+username+'</a>');
        lists.appendChild(list);
        console.log(list);
    });
})
*/

async function write(){
    //Data Exchange
    const res = await fetch("http://45.32.251.131/json.php");
    const article = await res.json();

    //Dom Operation
    article.forEach(function(user){
        //const list = document.createElement("li");
        const username = user.name;
        const articleid = user.id;
        //list.insertAdjacentHTML('afterbegin','<a href="#'+articleid+'" onclick="OnLinkClick();">'+username+'</a>');
        //lists.appendChild(list);

        let pageparam = location.hash;
        pageparam = pageparam.substr( 1 );
        /*初期表示ページの設定*/
        if(pageparam == ''){
            pageparam = 2;
        }

        if(pageparam == articleid){
            const Imagelink = user.pict_link;
            let Datetime = user.save_date;
            Datetime = Datetime.slice(0,10);
            const Mainarticle = user.article;

            console.log('Hash:' + pageparam);
            console.log(Mainarticle);

            document.getElementById("Maintitle").innerText = username;
            document.getElementById("Datetime").innerText = Datetime;
            document.getElementById("Imagelink").src = './images/'+Imagelink;
            document.getElementById("Imagelink").alt = username;
            document.getElementById("Mainarticle").innerText = Mainarticle;
        }
    });
    console.log(article);
}

async function proc(){
    write();
    
    //Data Exchange
    const res = await fetch("http://45.32.251.131/json.php");
    const article = await res.json();

    article.forEach(function(user){
        const username = user.name;
        const articleid = user.id;
        const list = document.createElement("li");
        list.insertAdjacentHTML('afterbegin','<a href="#'+articleid+'" onclick="OnLinkClick();">'+username+'</a>');
        lists.appendChild(list);
    });
}


function OnLinkClick() {
    write();
    return false;
}
