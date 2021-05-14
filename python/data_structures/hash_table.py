class HashTable:
    def __init__(self, size):
        self.size = size
        self.data = [None] * self.size

    def set(self, key, value):
        address = hash(key) % self.size
        if not self.data[address]:
            self.data[address] = []
        self.data[address].append([key, value])
        return self.data

    def get(self, key):
        address = hash(key) % self.size
        curr_bucket = self.data[address]
        if curr_bucket:
            for i in range(0, len(curr_bucket)):
                if curr_bucket[i][0] == key:
                    return curr_bucket[i][1]
        return None


a = HashTable(5)
a.set('grapes', 1000)
print(a.get('grapes'))