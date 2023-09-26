'use strict'

const title = document.querySelector('.title')
const longDate = document.createElement('p')
const shortDate = document.createElement('p')

longDate.classList.add('longDate')
shortDate.classList.add('shortDate')

title.append(longDate)
title.append(shortDate)

setInterval(function () {
	let date = new Date()

	let year = date.getFullYear()
	let day = date.getDay()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let messageDateShort
	let messageDateLong

	let toUpperLowerCase = function (str) {
		return str[0].toUpperCase() + str.substring(1).toLowerCase()
	}

	let dayOfWeek = toUpperLowerCase(
		date.toLocaleString('default', { weekday: 'long' })
	)

	let monthName = toUpperLowerCase(
		date.toLocaleString('default', { month: 'long' })
	)

	function setTimeWord(num, text_forms) {
		num = Math.abs(num) % 100
		let numTemp = num % 10
		if (num > 10 && num < 20) {
			return text_forms[2]
		}
		if (numTemp > 1 && numTemp < 5) {
			return text_forms[1]
		}
		if (numTemp == 1) {
			return text_forms[0]
		}
		return text_forms[2]
	}

	function setMinutes(number) {
		return number + ' ' + setTimeWord(number, ['минута', 'минуты', 'минут'])
	}

	function setHours(number) {
		return number + ' ' + setTimeWord(number, ['час', 'часа', 'часов'])
	}

	function setSeconds(number) {
		return number + ' ' + setTimeWord(number, ['секунда', 'секунды', 'секунд'])
	}

	function setMonth(monthName) {
		if (
			monthName.length - 1 == monthName.lastIndexOf('ь') ||
			monthName.length - 1 == monthName.lastIndexOf('й')
		) {
			return monthName.replace(monthName[monthName.length - 1], 'я')
		} else {
			return monthName + 'а'
		}
	}

	function setYear(number) {
		return number + ' года'
	}

	function setMessageDateLong(
		dayOfWeek,
		day,
		monthName,
		year,
		hours,
		minutes,
		seconds
	) {
		return (
			'Сегодня ' +
			dayOfWeek +
			', ' +
			day +
			' ' +
			monthName +
			' ' +
			year +
			', ' +
			hours +
			' ' +
			minutes +
			' ' +
			seconds
		)
	}

	minutes = setMinutes(minutes)
	hours = setHours(hours)
	seconds = setSeconds(seconds)
	monthName = setMonth(monthName)
	year = setYear(year)

	messageDateLong = setMessageDateLong(
		dayOfWeek,
		day,
		monthName,
		year,
		hours,
		minutes,
		seconds
	)

	longDate.textContent = messageDateLong

	function getZero(num) {
		if (num > 0 && num < 10) {
			return '0' + num
		} else {
			return num
		}
	}

	function setMessageDateShort() {
		return (
			getZero(date.getDate()) +
			'.' +
			getZero(date.getMonth() + 1) +
			'.' +
			date.getFullYear() +
			' - ' +
			getZero(date.getHours()) +
			':' +
			getZero(date.getMinutes()) +
			':' +
			getZero(date.getSeconds())
		)
	}
	messageDateShort = setMessageDateShort()
	shortDate.textContent = messageDateShort
}, 1000)
