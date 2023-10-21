# README

# Meilisearch: https://www.meilisearch.com/

# Cloud: https://cloud.meilisearch.com/projects

# Search page: https://ms-fb38c25d79d8-5829.sfo.meilisearch.io/?api_key=7dd339c0c69795c9fb8fdd29cae743fe89fedb97&cloud_banner=false


# Docker
build: docker-compose build
start: docker-compose up

# Meilisearch Install

# frozen_string_literal: true


```
require 'meilisearch'

module MeiliSearch
  class Api
    def initialize
      @client = MeiliSearch::Client.new(ENV['MEILI_URL'], ENV['MEILI_MASTER_KEY'], timeout: 15)
    end

    def add_documents(index, data)
      @client.index(index).add_documents(data)
    end

    def delete_documents(index)
      @client.index(index).delete_all_documents
    end

  end
end
```

# Using
```
    client = MeiliSearch::Api.new
    client.add_documents(index, data)
```