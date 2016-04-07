/// <reference path="../survey.ts" />
/// <reference path="../../typings/react/react.d.ts" />
class ReactSurveyPage extends React.Component<any, any> {
    private page: Survey.Page;
    constructor(props: any) {
        super(props);
        this.page = props.page;
    }
    componentWillReceiveProps(nextProps: any) {
        this.page = nextProps.page;
    }
    render(): JSX.Element {
        if (this.page == null) return;
        //todo titleText
        var questions = [];
        for (var i = 0; i < this.page.questions.length; i++) {
            var question = this.page.questions[i];
            questions.push(<ReactSurveyQuestion key={question.name} question={question} />);
        }
        return (
            <div>{questions}</div>
        );
    }
}