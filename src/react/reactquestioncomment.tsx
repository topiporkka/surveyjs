﻿/// <reference path="../survey.ts" />
/// <reference path="../../typings/react/react.d.ts" />
class ReactSurveyQuestioncomment extends React.Component<any, any> {
    private question: Survey.QuestionComment;
    constructor(props: any) {
        super(props);
        this.question = props.question;
        this.state = { value: this.question.value };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        this.question.value = event.target.value;
        this.setState({ value: this.question.value });
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
    }
    render(): JSX.Element {
        if (!this.question) return null;
        return (
            <textarea type="text" value={this.state.value} onChange={this.handleOnChange} cols={this.question.cols} rows={this.question.rows} />
        );
    }
}

class ReactSurveyQuestionCommentItem extends React.Component<any, any> {
    private question: Survey.Question;
    constructor(props: any) {
        super(props);
        this.question = props.question;
        this.state = { value: this.question.comment };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        this.question.comment = event.target.value;
        this.setState({ value: this.question.comment });
    }
    componentWillReceiveProps(nextProps: any) {
        this.question = nextProps.question;
    }
    render(): JSX.Element {
        if (!this.question) return null;
        return (
            <textarea type="text" value={this.state.value} onChange={this.handleOnChange} />
        );
    }
}