// 694ad86d37164675f0f64a08aca0234f

const loadData = async(searchValue) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=694ad86d37164675f0f64a08aca0234f`
    const res = await fetch(url);
    const resJson = await res.json();
    showData(resJson)

}

const getData = () => {
    const seachFiled = document.getElementById('serch');
    const seachFiledValue = seachFiled.value;
    loadData(seachFiledValue);
}

const showData = (data) => {
    grabAndChang("cityName", data.name)
    console.log(data);
}

const grabAndChang = (id, text) => {
    const actionDiv = document.getElementById(id);
    actionDiv.innerText = text;
}