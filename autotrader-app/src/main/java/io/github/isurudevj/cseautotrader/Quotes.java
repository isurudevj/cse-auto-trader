package io.github.isurudevj.cseautotrader;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Quotes {

    private List<Quote> quotes;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Quote {
        private String symbol;
        private double bid;
        private double ask;
    }

}
