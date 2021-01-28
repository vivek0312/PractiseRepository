package StepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

 

public class loginStepDefinition {
	
	
	WebDriver driver;
	
	@Given("^User is already on LoginPage$")
	public void user_is_already_on_LoginPage(){
		
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\vivek.agarwal1\\eclipse-workspace\\FreeCrmBDDFramework\\driver\\geckodriver.exe");
	    driver = new FirefoxDriver();
	    driver.get("https://ui.cogmento.com/");
	   
	    
	}


@When("^title of the login page is free CRM$")
	public void title_of_the_login_page_is_free_CRM() {
		
		String loginPageTitle = driver.getTitle();
		System.out.println("Title of the page is" + loginPageTitle);
		Assert.assertEquals("Cogmento CRM", loginPageTitle);
		System.out.println("title is found");
		
	}



	@Then("^user enter uername and password$")
	public void user_enter_uername() throws Throwable {
		
		driver.findElement(By.name("email")).sendKeys("1990vivek.agarwal@gmail.com");
		
		System.out.println("username is entered");
		
		Thread.sleep(3000);
		driver.findElement(By.name("password")).sendKeys("Test@123");
	
		}

	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button(){
		
		WebElement login = driver.findElement(By.xpath("//div[@class ='ui fluid large blue submit button']"));
		
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", login);
		
	   
	}

	@Then("^user in on homepage$")
	public void user_in_on_homepage() {
		
		String homePageTitle = driver.getTitle();
		Assert.assertEquals("Cogmento CRM", homePageTitle);
	
	}
	
	@Then("^close the browser$")
	public void close_teh_browser()  {
	    
	   driver.close();
	}

}
