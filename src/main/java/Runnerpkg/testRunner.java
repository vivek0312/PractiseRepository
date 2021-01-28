package Runnerpkg;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


 @RunWith(Cucumber.class)
 @CucumberOptions(
		
		features = "C:\\Users\\vivek.agarwal1\\eclipse-workspace\\FreeCrmBDDFramework\\src\\main\\java\\Features\\contact.feature\\"
		,glue = {"StepDef"},
		format= {"pretty","html:test-output","json: json-output/cucumber.json", "junit: junit-output/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = false		
		)


public class testRunner {
	 
	 
	
}
