import React, { Component } from 'react';

export default class SettingStep extends Component {
  render() {
    return (
      <div className="step">
        <h3>Luokittele peli</h3>
        <select ref="subject">
          <option>Aine</option>
          <option>Historia</option>
          <option>Matematiikka</option>
          <option>Yhteiskuntaoppi</option>
          <option>Biologia</option>
          <option>Maantieto</option>
          <option>Äidinkieli</option>
          <option>Ruotsi</option>
          <option>Englanti</option>
          <option>Elämänkatsomustieto</option>
          <option>Saksa</option>
          <option>Ranska</option>
          <option>Kemia</option>
          <option>Fysiikka</option>
          <option>Kotitalous</option>
          <option>Liikunta</option>
          <option>Kuvaamataito</option>
        </select>

        <select ref="age">
          <option>Ikä</option>
          <option>4-6</option>
          <option>7-9</option>
          <option>10-12</option>
          <option>13-15</option>
        </select>

        <select ref="language">
          <option>Kieli</option>
          <option>Suomi</option>
          <option>Englanti</option>
          <option>Ruotsi</option>
        </select>

        <input type="text" placeholder="Avainsanat" />
        <button onClick={(e) => {
          e.preventDefault();
          this.props.defineGameSettings(this.refs.subject.value, this.refs.age.value, this.refs.language.value);
        }}>Eteenpäin</button>
      </div>
    )
  }
}
