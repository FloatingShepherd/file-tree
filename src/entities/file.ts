interface IFile {
    path:string,
    content:string,
    createdAt:string,
    updatedAt:string
}

export default class File { 
    constructor(
        private path:string,
        private content:string,
        private createdAt:string,
        private updatedAt:string
    ) {}

    static generateFixtures(fixtures:IFile[]):File[] {
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
};
