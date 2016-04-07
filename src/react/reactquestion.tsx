/// <reference path="../survey.ts" />
/// <reference path="../../typings/react/react.d.ts" />
class ReactSurveyQuestion extends React.Component<any, any> {
    private question: Survey.Question;
    constructor(props: any) {
        super(props);
        this.question = props.question;
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
    }
    render(): JSX.Element {
        if (!this.question || !this.question.visible) return null;
        var titleText = "";
        if (this.question.visibleIndex > -1) {
            titleText = (this.question.visibleIndex + 1).toString() + ".";
        }
        if (this.question.isRequired) {
            titleText += this.question.requiredText;
        }
        titleText += this.question.title
        var title = <div>{titleText}</div>;
        var className = "ReactSurveyQuestion" + this.question.getType();
        var questionRender = React.createElement(window[className], { question: this.question });
        //TODO errors and comments
        return (
            <div>
                {title}
                {questionRender}
            </div>
        );
    }
}

