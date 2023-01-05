public static String[] words(String input) {
    return Arrays.stream(input.split("[^a-zA-Z-]+"))
            .filter(s -> !s.isEmpty())
            .toArray(String[]::new);
}