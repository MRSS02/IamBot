module.exports = async function checktime(tmin, thour, tdate, tmonth, tyear, timeOutMessage, amessage, v17, v18, v23, v24, ana, bi6to, alarm, currentTime) {
  let horario = Date.now()
  let harario = Math.floor(horario * Math.pow(86400000, -1))
  let hirario = harario * 86400000
  let herario = horario - hirario
  herario = herario * Math.pow(60000, -1)
  let onset = new Date().getTimezoneOffset()
  herario = herario - onset
  if (herario < 0) herario += 1440
  let semana = Date.now()
  onset = new Date().getTimezoneOffset()
  onset *= 60000
  semana -= onset
  let samana = Math.floor(semana * Math.pow(604800000, -1))
  let simana = samana * 604800000
  let somana = semana - simana
  let sumana = somana % 86400000
  somana -= sumana
  somana = somana * (Math.pow(86400000, -1))
  let ano = Date.now()
  onset = new Date().getTimezoneOffset()
  onset *= 60000
  ano -= onset
  ana = Math.floor(semana * Math.pow(126230400000, -1))
  let ani = ana * 126230400000
  let anoo = ano - ani

  let anu = anoo % 86400000
  anoo -= anu
  anoo = anoo * (Math.pow(86400000, -1))
  ana = ana * 4
  ana += 1970

  v17 = Math.floor(herario / 60)
  v18 = Math.floor(herario % 60)
  if (anoo < 730) {
    if (anoo > 364) {
      ana += 1
      anoo -= 365
    }
    bi6to = false
  } else {
    if (anoo > 1095) {
      ana += 3
      anoo -= 1096
      bi6to = false
    } else {
      ana += 2
      anoo -= 730
      bi6to = true
    }
  }

if (bi6to) {
    if (anoo < 31) {
      v23 = anoo
      v24 = 1
    } else {
      if (anoo < 60) {
        v23 = anoo - 31
        v24 = 2
      } else {
        if (anoo < 91) {
          v23 = anoo - 60
          v24 = 3
        } else {
          if (anoo < 121) {
            v23 = anoo - 91
            v24 = 4
          } else {
            if (anoo < 152) {
              v23 = anoo - 121
              v24 = 5
            } else {
              if (anoo < 182) {
                v23 = anoo - 152
                v24 = 6
              } else {
                if (anoo < 213) {
                  v23 = anoo - 182
                  v24 = 7
                } else {
                  if (anoo < 244) {
                    v23 = anoo - 213
                    v24 = 8
                  } else {
                    if (anoo < 274) {
                      v23 = anoo - 244
                      v24 = 9
                    } else {
                      if (anoo < 305) {
                        v23 = anoo - 274
                        v24 = 10
                      } else {
                        if (anoo < 335) {
                          v23 = anoo - 305
                          v24 = 11
                        } else {
                            v23 = anoo - 335
                            v24 = 12
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
} else {
    if (anoo < 31) {
      v23 = anoo
      v24 = 1
    } else {
      if (anoo < 59) {
        v23 = anoo - 31
        v24 = 2
      } else {
        if (anoo < 90) {
          v23 = anoo - 59
          v24 = 3
        } else {
          if (anoo < 120) {
            v23 = anoo - 90
            v24 = 4
          } else {
            if (anoo < 151) {
              v23 = anoo - 120
              v24 = 5
            } else {
              if (anoo < 181) {
                v23 = anoo - 151
                v24 = 6
              } else {
                if (anoo < 212) {
                  v23 = anoo - 181
                  v24 = 7
                } else {
                  if (anoo < 243) {
                    v23 = anoo - 212
                    v24 = 8
                  } else {
                    if (anoo < 273) {
                      v23 = anoo - 243
                      v24 = 9
                    } else {
                      if (anoo < 304) {
                        v23 = anoo - 273
                        v24 = 10
                      } else {
                        if (anoo < 334) {
                          v23 = anoo - 304
                          v24 = 11
                        } else {
                            v23 = anoo - 334
                            v24 = 12
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  v23 += 1
  //v17 = hours
  //v18 = minutes
  //v23 = date
  //v24 = month
  //ana = year
  if (v17 < 10) {
    if (v18 < 10) {
      currentTime = `${v24}/${v23}/${ana} 0${v17}:0${v18}`
    } else {
      currentTime = `${v24}/${v23}/${ana} 0${v17}:${v18}`
    }
  } else {
    if (v18 < 10) {
      currentTime = `${v24}/${v23}/${ana} ${v17}:0${v18}`
    } else {
      currentTime = `${v24}/${v23}/${ana} ${v17}:${v18}`
    }

  }

  if (alarm && tmin == v18 && thour == v17 && tdate == v23 && tmonth == v24 && tyear == ana) {
      const m = await amessage.send(timeOutMessage)
      alarm = false
  }

//return variable data
  let vardata = {
    tmin: tmin, thour: thour, tdate: tdate,
    tmonth: tmonth, tyear: tyear, timeOutMessage: timeOutMessage,
    amessage: amessage, v17: v17, v18: v18,
    v23: v23, v24: v24, ana: ana,
    bi6to: bi6to, alarm: alarm, currentTime: currentTime
  }
  return vardata
}
