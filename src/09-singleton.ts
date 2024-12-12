export class MyService {
    private static instance: MyService | null = null;
    private constructor(private name: string) {
      }
      getName(): string {
        return this.name;
      }

    public static getInstance(name: string) {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const service1 = MyService.getInstance('Service 1');
console.log(service1.getName());
const service2 = MyService.getInstance('Service 2');
console.log(service2.getName());