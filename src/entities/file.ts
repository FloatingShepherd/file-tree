interface IFile {
    path: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    name?: string
}

export default class File {
    private name: string;

    constructor(
        private path: string,
        private content: string,
        private createdAt: string,
        private updatedAt: string
    ) {
        this.name = "";
    }

    static generateFixtures(fixtures: IFile[]): File[] {
        return fixtures.map(fixture => new File(fixture.path, fixture.content, fixture.createdAt, fixture.updatedAt));
    }

    getPath() {
        return this.path;
    }
    getContent() {
        return this.content;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    getName() {
        return this.name;
    }
    setName(_name: string) {
        this.name = _name;
    }
    splitPathAndSetName() {
        const paths: string[] = this.path.split("/").filter((p) => p);
        this.setName(paths.pop() || "");
        return paths;
    }
};
