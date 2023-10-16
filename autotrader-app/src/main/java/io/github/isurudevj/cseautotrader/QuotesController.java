package io.github.isurudevj.cseautotrader;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Arrays;

@Controller
@CrossOrigin(origins = {"*"})
public class QuotesController {

    @MessageMapping("/quotes")
    @SendToUser
    public Quotes handle(String greeting) {
        return Quotes.builder()
                .quotes(Arrays.asList(
                    Quotes.Quote.builder()
                            .ask(1.341)
                            .bid(1.34)
                            .symbol("BNA")
                            .build(),
                    Quotes.Quote.builder()
                            .ask(44.51)
                            .bid(44.41)
                            .symbol("EXPO")
                            .build()
                ))
                .build();
    }
}
