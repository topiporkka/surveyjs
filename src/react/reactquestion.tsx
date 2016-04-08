﻿/// <reference path="../survey.ts" />
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
        var title = this.renderTitle();
        var className = "ReactSurveyQuestion" + this.question.getType();
        var questionRender = React.createElement(window[className], { question: this.question });
        var comment = this.renderComment();
        var errors = this.renderErrors();
        return (
            <div className="sv_q">
                {title}
                {errors}
                {questionRender}
                {comment}
            </div>
        );
    }
    renderTitle(): JSX.Element {
        var titleText = "";
        if (this.question.visibleIndex > -1) {
            titleText = (this.question.visibleIndex + 1).toString() + ".";
        }
        if (this.question.isRequired) {
            titleText += this.question.requiredText;
        }
        titleText += this.question.title
        return(<div className="sv_q_title">{titleText}</div>);
    }
    renderComment(): JSX.Element {
        if (!this.question.hasComment) return null;
        return (<div>
                <div>Other (please describe) </div>
                <ReactSurveyQuestionCommentItem  question={this.question} />
            </div>);
        }
    renderErrors(): JSX.Element {
        if (this.question.errors.length === 0) return null;
        var errors = [];
        for (var i = 0; i < this.question.errors.length; i++) {
            var error = this.question.errors[i];
            var key = "error" + i;
            errors.push(<div key={key}>error.getText()</div>);
        }
        return (<div className="sv_q_erbox">{errors}</div>);
    }
}

