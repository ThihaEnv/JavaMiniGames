/*
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
            .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/css/**", "/js/**", "/images/**").permitAll() // static file တွေကို အားလုံး ပေးကြည့်မယ်
                    .anyRequest().permitAll()
            )
            .csrf(csrf -> csrf.disable());
    return http.build();
}

void main() {
}*/
