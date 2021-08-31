package com.shutl.controller;

enum VehicleMarkup {
    BICYCLE(0.1),
    MOTORBIKE(0.15),
    PARCEL_CAR(0.2),
    SMALL_VAN(0.3),
    LARGE_VAN(0.4);

    private final double markup;

    VehicleMarkup(double markup) {
        this.markup = markup;
    }

    public double getMarkup() {
        return markup;
    }
}

public class PriceUtils {
    public static Long applyMarkup(Long price, String vehicle) {
        double markup = VehicleMarkup.valueOf(vehicle.toUpperCase()).getMarkup();
        return Math.round(((1 + markup) * price));
    }
}
