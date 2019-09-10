function mxdiflg(a1, a2) {
    let s1String = 10000000000000
    let l1String = 0
    let s2String = 10000000000000
    let l2String = 0

    if (a1.length == 0 || a2.length == 0) {
        return -1
    }

    for (let i = 0; i < a1.length; i++) {
        if (a1[i].length > l1String) {
            l1String = a1[i].length
        }
        if (a1[i].length < s1String) {
            s1String = a1[i].length
        }
    }
    for (let g = 0; g < a2.length; g++) {
        if (a2[g].length > l2String) {
            l2String = a2[g].length
        }
        if (a2[g].length < s2String) {
            s2String = a2[g].length
        }
    }

    let answer1 = s2String - l1String
    let answer2 = l1String - s2String
    let answer3 = l2String - s1String

    if (answer3 >= answer2) {
        return answer3
    }
    if (answer2 > answer3) {
        return answer2
    }
    console.log(s2String)
    console.log(l2String)
    console.log(s1String)
    console.log(l1String)

}