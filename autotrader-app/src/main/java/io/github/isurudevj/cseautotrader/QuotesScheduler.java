package io.github.isurudevj.cseautotrader;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Random;

@RequiredArgsConstructor
@Component
@Slf4j
@EnableScheduling
public class QuotesScheduler {

    private final SimpMessagingTemplate template;

    @Scheduled(initialDelayString = "PT1S", fixedDelayString = "PT1S")
    public void schedule() {
        final Random random = new Random();
        double askChange = (random.nextInt(10) + 1) * 0.01;
        double bidChange = (random.nextInt(10) + 1) * 0.01;
        Quotes quotes = Quotes.builder()
                .quotes(Arrays.asList(
                        Quotes.Quote.builder()
                                .ask(1.341 + askChange)
                                .bid(1.34 - bidChange)
                                .symbol("BNA")
                                .build(),
                        Quotes.Quote.builder()
                                .ask(44.51 + askChange)
                                .bid(44.41 - bidChange)
                                .symbol("EXPO")
                                .build()
                ))
                .build();

        log.info("Sending quotes [{}]", quotes);
        template.convertAndSend("/topic/quotes", quotes);
    }
}
