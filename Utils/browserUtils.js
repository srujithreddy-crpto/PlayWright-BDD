class BrowserUtils {

    setInputText = async function (element, locatorValue, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.waitForSelector(element, { state: 'attached' })
            await page.locator(element).scrollIntoViewIfNeeded()
            await page.locator(element).click()
            await page.keyboard.press('Control+A')
            await page.keyboard.press('Delete')
            await page.fill(element, locatorValue, { delay: 2000 })
            let enteredValue = await page.$eval(element, el => el.value)
            if (enteredValue == locatorValue) isSuccess = true
        }
        catch (e) {
            console.log("Error occured while setting the input text" + e)
        }
        return isSuccess
    }

    clickElement = async function (locator, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut);
            }
            await page.locator(locator).scrollIntoViewIfNeeded()
            await page.click(locator)
            isSuccess = true

        } catch (error) {
            console.log("Error occured while clicking the locator " + error)
        }
        return isSuccess
    }

    elementIsVisible = async function (element, waitForStatus, timeOut) {
        let isVisible = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            if (waitForStatus) await page.waitForSelector(element, { state: 'visible' })
            isVisible = await page.locator(element).nth(0).isVisible()
        } catch (error) {
            console.log("Error occurred as " + error)
        }
        return isVisible
    }

    elementIsHidden = async function (element, waitForStatus, timeOut) {
        let isHidden = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            if (waitForStatus) await page.waitForSelector(element, { state: 'hidden' })
            isHidden = await page.locator(element).nth(0).isHidden()
        } catch (error) {
            console.log("Error occured as " + e)
        }
        return isHidden
    }

    keyBoardActions = async function (actions) {
        let isSuccess = false
        try {
            for (let index = 0; index < actions.length; index++) {
                await page.keyboard.press(actions[index]);
            }
            isSuccess = true
        } catch (error) {
            console.log("Error occured " + e)
        }
        return isSuccess
    }

    mouseHover = async function (ele, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(ele).scrollIntoViewIfNeeded()
            await page.locator(ele).hover()
            isSuccess = true
        } catch (error) {
            console.log("Error occurred as " + e)
        }
        return isSuccess
    }

    setInputAndClickTab = async function (element, locatorValue, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.waitForSelector(element, { state: 'attached' })
            await page.locator(element).scrollIntoViewIfNeeded()
            await page.locator(element).click()
            await page.keyboard.press('Control+A')
            await page.keyboard.press('Delete')
            await page.fill(element, locatorValue, { delay: 2000 })
            let enteredValue = await page.$eval(element, el => el.value);
            if (enteredValue == locatorValue) {
                await this.keyBoardActions(['Tab'])
                isSuccess = true
            }
        }
        catch (e) {
            console.log("Error occured while setting the input text" + e)
        }
        return isSuccess
    }

    selectOptionsBasedOnLabel = async function (element, text, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded()
            await page.selectOption(element, { label: text }, { delay: 2000 })
            isSuccess = true
        } catch (error) {
            console.log("Error occured " + error)
        }
        return isSuccess
    }

    getInputText = async function (element, timeOut) {
        let innerText = null
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded()
            innerText = await page.locator(element).innerText({ strict: false, delay: 2000 })
        } catch (error) {
            console.log("Error occurred as " + error)
        }
        return innerText
    }

    getElementTextContent = async function (element, timeOut) {
        let text = null
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded({ visible: true })
            text = await page.locator(element).textContent({ strict: false, delay: 2000 })
        } catch (error) {
            console.log("Error occurred as " + error)
        }
        return text
    }

    getAttributeValue = async function (element, value, timeOut) {
        let attributeValue = null
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded({ visible: true })
            attributeValue = await page.locator(element).getAttribute(value, { strict: false, delay: 2000 })
        } catch (error) {
            console.log("Error occurred as " + error)
        }
        return attributeValue
    }

    uploadFile = async function (element, path, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.setInputFiles(element, path)
            isSuccess = true
        } catch (error) {
            console.log('Error occurred as ' + error)
        }
        return isSuccess
    }

    isCheckBoxChecked = async function (element, timeOut) {
        let isChecked = null
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded()
            isChecked = await page.locator(element).isChecked()
        } catch (error) {
            console.log('Error occurred as ' + error)
        }
        return isChecked
    }

    isCheckBoxUnChecked = async function (element, timeOut) {
        let isUnChecked = null
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded()
            isUnChecked = await page.locator(element).uncheck()
        } catch (error) {
            console.log('Error occurred as ' + error)
        }
        return isUnChecked
    }

    getCount = async function (element, timeOut) {
        let count = 0
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            count = await page.locator(element).count()
        } catch (error) {
            console.log("Error occurred as " + error)
        }
        return count
    }

    moveSlider = async function (element, sourceLocator, targeLocator, percentage, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded()
            let sourceBondingBox = await page.locator(sourceLocator).boundingBox()
            let targetBoundingBox = await page.locator(targeLocator).boundingBox()
            const startingPoint = {
                x: sourceBondingBox.x + sourceBondingBox.width / 2 * percentage,
                y: sourceBondingBox.y + sourceBondingBox.height / 2
            }
            const endPoint = {
                x: targetBoundingBox.x + targetBoundingBox.width * percentage,
                y: targetBoundingBox.y + targetBoundingBox.height / 2
            }
            await page.mouse.move(startingPoint.y, startingPoint.x)
            await page.mouse.down()
            await page.mouse.move(endPoint.x, endPoint.y)
            await page.mouse.up()
            isSuccess = true
        } catch (error) {
            console.log("Error occurred as " + error)
        }
        return isSuccess
    }

    bootstrapDropDown = async function (element, text, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(element).scrollIntoViewIfNeeded()
            await page.locator(element).locator(`div[contains(text(),"${text}")]`).click()
            isSuccess = true
        } catch (error) {
            console.log("Error occurred as " + error)
        }
        return isSuccess
    }

    handleSlider = async function (locator, sourceLocator, targetLocator, targetValue, timeOut) {
        let isSuccess = false
        try {
            if (timeOut != undefined) {
                await page.waitForTimeout(timeOut)
            }
            await page.locator(locator).scrollIntoViewIfNeeded()
            let element = await page.locator(locator)
            const sliderBoundingBox = await element.boundingBox()
            if (sourceLocator != null) {
                await page.locator(sourceLocator).dragTo(element, {
                    force: true,
                    targetPosition: {
                        // moving the slider to the target value in %
                        x: sliderBoundingBox.width * targetValue,
                        y: 0
                    },
                });
            }
            await page.locator(locator).scrollIntoViewIfNeeded()
            await page.waitForTimeout(timeOut)
            if (targetLocator != null) {
                await await page.locator(targetLocator).dragTo(element, {
                    force: true,
                    targetPosition: {
                        y: sliderBoundingBox.height * 0.10,
                        x: 0
                    }
                })
            }
            isSuccess = true
        }
        catch (error) {
            console.log("Error occurred as " + error)
        }
        return isSuccess
    }
}



module.exports = { BrowserUtils }