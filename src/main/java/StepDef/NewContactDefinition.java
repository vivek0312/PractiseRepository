package StepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

 

public class NewContactDefinition {
	

	@FindBy(xpath="//div[@class=\"ui left fixed vertical  icon menu sidebar-dark left-to-right\"]") WebElement vivek;
	WebDriver driver;
	
	@Given("^already on LoginPage$")
	public void already_on_LoginPage(){
		
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\vivek.agarwal1\\eclipse-workspace\\FreeCrmBDDFramework\\driver\\geckodriver.exe");
	    driver = new FirefoxDriver();
	    driver.get("https://ui.cogmento.com/");
	   
	    
	}


@When("^Title of the login page is free CRM$")
	public void title_of_the_login_page_is_free_CRM() {
		
		String loginPageTitle = driver.getTitle();
		System.out.println("Title of the page is" + loginPageTitle);
		Assert.assertEquals("Cogmento CRM", loginPageTitle);
		System.out.println("title is found");
		
	}



	@Then("^Enter username and password$")
	public void user_enter_uername() throws Throwable {
		
		driver.findElement(By.name("email")).sendKeys("1990vivek.agarwal@gmail.com");
		
		System.out.println("username is entered");
		
		Thread.sleep(3000);
		driver.findElement(By.name("password")).sendKeys("Test@123");
	
		}

	
	@Then("^Click on login button$")
	public void user_clicks_on_login_button(){
		
		WebElement login = driver.findElement(By.xpath("//div[@class ='ui fluid large blue submit button']"));
		
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", login);
		
	   
	}

	@Then("^Now user in on homepage$")
	public void user_in_on_homepage() {
		
		String homePageTitle = driver.getTitle();
		Assert.assertEquals("Cogmento CRM", homePageTitle);
	
	}
	
	@Then("^Select contact menu$")
	public void user_select_contact_menu() {
		
		 //WebElement Frame = driver.findElement(By.xpath("//div[@class = 'ui left fixed vertical  icon menu sidebar-dark left-to-right' ]")); 
		// driver.switchTo().frame(1);
	//	 driver.
		 Actions action = new Actions(driver);
		 WebElement frame= driver.findElement(By.xpath("//div[@class=\"ui left fixed vertical  icon menu sidebar-dark left-to-right\"]"));
	//WebElement contact = driver.findElement(By.xpath("//a[@href = '/contacts']"));
		 //WebElement contact = driver.findElement(By.xpath("//div[@id=\"main-nav\"]"));
	//WebElement addContact = driver.findElement(By.xpath("//div[@class = 'menu-item-wrapper'][3]/button"));
		 action.moveToElement(frame); 
		   
		  // action.moveToElement(contact).build().perform();
	  
	    
	}

	@Then("^Mention firstname and lastname and position and designation$")
	public void user_mention_firstname_and_lastname_and_position_and_designation(){
		
		driver.findElement(By.name("first_name")).sendKeys("vivek");
		driver.findElement(By.name("last_name")).sendKeys("agarwal");
		driver.findElement(By.name("position")).sendKeys("Lead");
		driver.findElement(By.name("department")).sendKeys("QA");
	    
	    
	}

	@Then("^Click save$")
	public void user_click_save(){
		
		driver.findElement(By.xpath("//button[@class = 'ui linkedin button']"));
	   
	    
	}

	
	@Then("^Close the browser$")
	public void close_the_browser()  {
	    
	   driver.close();
	}

}
