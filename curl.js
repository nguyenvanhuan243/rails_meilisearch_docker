// 1) - Search Using Api MeiliSearch
// curl --location 'https://ms-fb38c25d79d8-5829.sfo.meilisearch.io/indexes/coin_list/search' \
// --header 'authority: ms-fb38c25d79d8-5829.sfo.meilisearch.io' \
// --header 'accept: */*' \
// --header 'accept-language: en-US,en;q=0.9,vi;q=0.8' \
// --header 'authorization: Bearer 7dd339c0c69795c9fb8fdd29cae743fe89fedb97' \
// --header 'content-type: application/json' \
// --header 'origin: https://ms-fb38c25d79d8-5829.sfo.meilisearch.io' \
// --header 'referer: https://ms-fb38c25d79d8-5829.sfo.meilisearch.io/?api_key=7dd339c0c69795c9fb8fdd29cae743fe89fedb97' \
// --header 'sec-ch-ua: "Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"' \
// --header 'sec-ch-ua-mobile: ?0' \
// --header 'sec-ch-ua-platform: "macOS"' \
// --header 'sec-fetch-dest: empty' \
// --header 'sec-fetch-mode: cors' \
// --header 'sec-fetch-site: same-origin' \
// --header 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36' \
// --header 'x-meilisearch-client: Meilisearch mini-dashboard (v0.2.11) ; Meilisearch instant-meilisearch (v0.11.1) ; Meilisearch JavaScript (v0.31.1)' \
// --data '{
//     "q": "bitcoin",
//     "facets": [],
//     "limit": 21,
//     "offset": 0
// }'


// 2) Get indexes
// curl 'https://ms-fb38c25d79d8-5829.sfo.meilisearch.io/indexes/coin_list/search' \
//   -H 'authority: ms-fb38c25d79d8-5829.sfo.meilisearch.io' \
//   -H 'accept: */*' \
//   -H 'accept-language: en-US,en;q=0.9,vi;q=0.8' \
//   -H 'authorization: Bearer 7dd339c0c69795c9fb8fdd29cae743fe89fedb97' \
//   -H 'content-type: application/json' \
//   -H 'origin: https://ms-fb38c25d79d8-5829.sfo.meilisearch.io' \
//   -H 'referer: https://ms-fb38c25d79d8-5829.sfo.meilisearch.io/?api_key=7dd339c0c69795c9fb8fdd29cae743fe89fedb97' \
//   -H 'sec-ch-ua: "Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: same-origin' \
//   -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36' \
//   -H 'x-meilisearch-client: Meilisearch mini-dashboard (v0.2.11) ; Meilisearch instant-meilisearch (v0.11.1) ; Meilisearch JavaScript (v0.31.1)' \
//   --data-raw '{"q":"","facets":[],"limit":21,"offset":0}' \
//   --compressed

// Api docs: https://www.meilisearch.com/docs/reference/api/search#response