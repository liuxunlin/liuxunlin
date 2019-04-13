class List {
	constructor(options) {
		this.lists = options.lists;
		this.url = options.url;
		this.load();
		this.addEvent();
	}
	load() {
		var that = this;
		ajax({
			url: this.url,
			success: function (res) {
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display() {
		var str = "";
		for (var i = 0; i < this.res.length; i++) {
			str += `<li class="listsItem" index="${this.res[i].goodsId}">
				      <div class="listLink">
					  <p class="imgs">
					  <img class="lazy" style="display: inline;"src="${this.res[i].src}">
					  </a>
					  </p>
					  <p class="title"><a href="goods.html">${this.res[i].name}</a></p>
					  <p class="price"><a href="goods.html">${this.res[i].price}</a></p>
					  <p class="operation"><button class="btn btn-default" type="button">立即购买</button>
					  <button class="btn btn-theme ml10 tijiao" type="button"><em>加入购物车</em></button></p></div></li>`;
		}
		this.lists.innerHTML = str;
	}
	addEvent() {
		var that = this;
		this.lists.addEventListener("click", function (eve) {
			if (eve.target.nodeName == "EM") {
				that.id = eve.target.parentNode.getAttribute("index");
				that.setCookie()
			}
		})
	}

	setCookie() {
		this.goods = getCookie("goods")
		if (this.goods == "") {
			this.goods = [{
				id: this.id,
				num: 1
			}];
		} else {
			this.goods = JSON.parse(this.goods);
			var onoff = true;
			this.goods.forEach((v) => {
				if (v.id == this.id) {
					v.num++
					onoff = false;
				}
			})
			if (onoff) {
				this.goods.push({
					id: this.id,
					num: 1
				})
			}
		}
		setCookie("goods", JSON.stringify(this.goods))
	}
}

new List({
	lists: document.getElementById("jsonlists"),
	url: "http://localhost/huayu/js/goods.json"
})