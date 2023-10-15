package io.github.isurudevj.cseautotrader;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@RequiredArgsConstructor
@Component
@Slf4j
@EnableScheduling
public class QuotesScheduler {

    private final SimpMessagingTemplate template;

    @Scheduled(initialDelayString = "PT1S", fixedDelayString = "PT1S")
    public void schedule() {
        Quotes quotes = Quotes.builder()
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

        log.info("Sending quotes [{}]", quotes);
        template.convertAndSend("/topic/quotes", quotes);
    }
}
