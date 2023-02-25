
(defn url-to-scrape [endpoint]
  (str "https://discord.com/developers/docs/" endpoint))

(println (html/html-resource (java.net.URL. (url-to-scrape "resources/guilds"))))


