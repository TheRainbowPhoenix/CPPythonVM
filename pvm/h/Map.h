#ifndef MAP_H
#define MAP_H

#include "./Messages.h"
#include "./Reality.h"

template <typename K, typename V> class Map {
private:
  //   std::unordered_map<K, V> _map;
  struct KeyValuePair {
    K key;
    V value;
  };

  KeyValuePair *buckets;
  int capacity;
  int count;

  int hash(const K &key) const {
    int hashValue = 0;
    const char *keyData = reinterpret_cast<const char *>(&key);
    int keySize = sizeof(K);

    for (int i = 0; i < keySize; ++i) {
      hashValue = (hashValue << 5) + hashValue + keyData[i];
    }

    return hashValue % capacity;
  }

public:
  explicit Map(int capacity = 255) : capacity(capacity), count(0) {
    buckets = new KeyValuePair[capacity];
    memset(buckets, 0, sizeof(KeyValuePair) * capacity);
  }

  ~Map() { delete[] buckets; }

  int size() const { return count; }

  void insert(K key, V value) {
    int bucketIndex = hash(key);
    KeyValuePair *bucket = &buckets[bucketIndex];

    while (bucket->key != 0) {
      if (bucket->key == key) {
        bucket->value = value;
        return;
      }

      bucket++;
    }

    bucket->key = key;
    bucket->value = value;
    count++;
  }

  V &get(const K &key) {
    int bucketIndex = hash(key);
    KeyValuePair *bucket = &buckets[bucketIndex];

    while (bucket->key != 0) {
      if (bucket->key == key) {
        return bucket->value;
      }

      bucket++;
    }

    CPPAlertUser("[Map::get] Key not found in the map.");
  }

  bool has_key(const K &key) const {
    int bucketIndex = hash(key);
    KeyValuePair *bucket = &buckets[bucketIndex];

    while (bucket->key != 0) {
      if (bucket->key == key) {
        return true;
      }

      bucket++;
    }

    return false;
  }

  void remove(const K &key) {
    int bucketIndex = hash(key);
    KeyValuePair *bucket = &buckets[bucketIndex];

    while (bucket->key != 0) {
      if (bucket->key == key) {
        bucket->key = 0;
        count--;
        return;
      }

      bucket++;
    }

    CPPAlertUser("[Map::remove] Key not found in the map.");
  }
};

// template <typename K, typename V> void Map<K, V>::insert(K k, V v) {
//   if (has_key(k)) {
//     _map.at(k) = v;
//   } else {
//     _map.insert(std::make_pair(k, v));
//   }
// }

// template <typename K, typename V> V &Map<K, V>::get(K k) {
//   if (has_key(k)) {
//     return _map.at(k);
//   }
//   return Universe::Py_None;
// }

// template <typename K, typename V> bool Map<K, V>::has_key(K k) {
//   return _map.find(k) != _map.end();
// }

// template <typename K, typename V> void Map<K, V>::remove(K k) {
// _map.erase(k); }

#endif