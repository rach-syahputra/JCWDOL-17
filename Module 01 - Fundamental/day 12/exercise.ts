/** @format */
// Create a code that could handle a queue on food ordering process, with this specification:
// Create a class to handle queuing process in a file.
// Create file to handle and execute queue class.
// Each queue process takes a random interval from 1-5 seconds.
// Clue : Use while & promise

class Queue {
  private foods: string[] = [];

  private random() {
    return Math.ceil(Math.random() * 4); //0.xx-4.xx => 1-5
  }
  add(food: string) {
    this.foods.push(food);
  }

  public async print() {
    let i = 1;
    while (i <= this.foods.length) {
      const time = this.random(); //1-5
      //   if (i == this.foods.length + 1) break;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.foods[i - 1]);
        }, time * 1000);
      }).then((food) => {
        console.log("Queue", i, food, "Done in", time, "minutes");
        i++;
      });
    }
  }
}

const q = new Queue();
q.add("nasi goreng");
q.add("kuetiaw");
q.add("mcd");
q.add("kfc");
q.add("hokben");
q.print();
