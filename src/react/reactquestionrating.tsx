/// <reference path="../survey.ts" />
/// <reference path="../../typings/react/react.d.ts" />
class ReactSurveyQuestionrating extends React.Component<any, any> {
    private question: Survey.QuestionRating;
    constructor(props: any) {
        super(props);
        this.question = props.question;
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
    }
    render(): JSX.Element {
        if (!this.question) return null;
        return (
            <div>
            </div>
        );
    }
}