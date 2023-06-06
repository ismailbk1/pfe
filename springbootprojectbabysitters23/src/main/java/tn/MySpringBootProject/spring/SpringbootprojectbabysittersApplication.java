package tn.MySpringBootProject.spring;




import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class SpringbootprojectbabysittersApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootprojectbabysittersApplication.class, args);
	}
	
	@Configuration
	public class CorsConfiguration {

		@Bean
		public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**")
							.allowedOriginPatterns("*")
							.allowedMethods("GET", "POST", "PUT", "DELETE")
							.allowCredentials(true);
				}
			};
		}
	}	
		

}
