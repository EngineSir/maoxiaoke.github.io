function update() {
	var t, s, i = 0;
	if (t = Math.min(Math.max(-mouseY, -size), size) / radius * tspeed, s = -Math.min(Math.max(-mouseX, -size), size) / radius * tspeed, lasta = t, lastb = s, !(Math.abs(t) <= .01 && Math.abs(s) <= .01)) {
		sineCosine(t, s, i);
		for (var a = 0; a < mcList.length; a++) if (!mcList[a].on) {
			var c = mcList[a].cx,
				o = mcList[a].cy * ca + mcList[a].cz * -sa,
				e = mcList[a].cy * sa + mcList[a].cz * ca,
				h = c * cb + e * sb,
				m = o,
				l = c * -sb + e * cb,
				n = h * cc + m * -sc,
				r = h * sc + m * cc,
				L = l;
			mcList[a].cx = n, mcList[a].cy = r, mcList[a].cz = L, per = d / (d + L), mcList[a].x = howElliptical * n * per - 2 * howElliptical, mcList[a].y = r * per, mcList[a].scale = per;
			var f = per;
			f = (f - .6) * (10 / 6), mcList[a].alpha = f * f * f - .2, mcList[a].zIndex = Math.ceil(100 - Math.floor(mcList[a].cz))
		}
		doPosition()
	}
}
function positionAll() {
	for (var t = 0, s = 0, i = mcList.length, a = 0; a < i; a++) distr ? (t = Math.acos(-1 + (2 * (a + 1) - 1) / i), s = Math.sqrt(i * Math.PI) * t) : (t = Math.random() * Math.PI, s = Math.random() * (2 * Math.PI)), mcList[a].cx = radius * Math.cos(s) * Math.sin(t), mcList[a].cy = radius * Math.sin(s) * Math.sin(t), mcList[a].cz = radius * Math.cos(t), aA[a].style.left = mcList[a].cx + oDiv.offsetWidth / 2 - mcList[a].offsetWidth / 2 + "px", aA[a].style.top = mcList[a].cy + oDiv.offsetHeight / 2 - mcList[a].offsetHeight / 2 + "px"
}
function doPosition() {
	for (var t = oDiv.offsetWidth / 2, s = oDiv.offsetHeight / 2, i = 0; i < mcList.length; i++) if (!mcList[i].on) {
		var a = aA[i].style;
		mcList[i].alpha > .1 ? ("" != a.display && (a.display = ""), a.left = mcList[i].cx + t - mcList[i].offsetWidth / 2 + "px", a.top = mcList[i].cy + s - mcList[i].offsetHeight / 2 + "px", a.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")", a.zIndex = mcList[i].zIndex, a.opacity = mcList[i].alpha) : "none" != a.display && (a.display = "none")
	}
}
function sineCosine(t, s, i) {
	sa = Math.sin(t * dtr), ca = Math.cos(t * dtr), sb = Math.sin(s * dtr), cb = Math.cos(s * dtr), sc = Math.sin(i * dtr), cc = Math.cos(i * dtr)
}
var radius = 90,
	d = 200,
	dtr = Math.PI / 180,
	mcList = [],
	lasta = 1,
	lastb = 1,
	distr = !0,
	tspeed = 11,
	size = 200,
	mouseX = 0,
	mouseY = 10,
	howElliptical = 1,
	aA = null,
	oDiv = null;