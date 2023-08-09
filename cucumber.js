let common =`--require ./stepDefinitions/*.js
            --require ./support/*.js
            --require ./Utils/*.js
            --require ./POM/*.js
            --format progress
            --format json:./report/cucumber_report.json
            --format @cucumber/pretty-formatter
            --publish-quiet`;

module.exports = {
    default : `${common} ./featureFiles/*.feature`
}