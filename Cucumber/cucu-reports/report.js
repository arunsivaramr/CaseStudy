$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:cucumber/Purchase.feature");
formatter.feature({
  "name": "TestMe App",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Purchasing Headphone",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "i go to All \"categories\"",
  "keyword": "When "
});
formatter.match({
  "location": "Purchase.i_go_to_All_categories(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i go to Electronics",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.i_go_to_Electronics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on headphones and add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.click_on_headphones_and_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Payment page is appeared",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.payment_page_is_appeared()"
});
formatter.result({
  "status": "passed"
});
});